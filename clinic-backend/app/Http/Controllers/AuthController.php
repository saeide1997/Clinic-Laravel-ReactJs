<?php
//  clinic-backend/app/Http/Controllers/AuthController.php 

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function sendCode(Request $request)
    {
        $request->validate([
            'name' => 'nullable|string|max:255',
            'mobile' => 'required',
            'national_code' => 'size:11|nullable',
        ]);

        $code = rand(100000, 999999);

        // ایجاد یا آپدیت کاربر فقط با موبایل
        $user = User::updateOrCreate(
            ['mobile' => $request->mobile],
            [
                'national_code' => $request->national_code,
                'name' => $request->name,
                'verification_code' => $code,
                'code_expires_at' => now()->addMinutes(3),
            ]
        );

        // اینجا برای تست به جای SMS، کد رو لاگ می‌کنیم
        Log::info("Verification code for {$request->mobile}: $code");

        return response()->json([
            'message' => 'کد تأیید ارسال شد.',
            'is_new_user' => empty($user->name), // اگر هنوز ثبت‌نام کامل نکرده
        ]);
    }
    public function verifyCode(Request $request)
    {
        $request->validate([
            'mobile' => 'required|digits:11',
            'code' => 'required|digits:6',
        ]);

        $user = User::where('mobile', $request->mobile)
            ->where('verification_code', $request->code)
            ->where('code_expires_at', '>', now())
            ->first();
        Log::info("Verification code for {$user}");

        if (!$user) {
            Log::info("1");

            return response()->json(['message' => 'کد اشتباه یا منقضی شده است.'], 422);
        }

        // کد تایید شد → پاک کردن کد
        $user->update([
            'verification_code' => $request->code,
            'mobile_verified_at' => now(),
        ]);

        if (empty($user->name)) {
            Log::info("10");

            return response()->json(['next' => 'register']); // باید بره صفحه ثبت نام
        }
        Log::info("100");

        return response()->json(['next' => 'home']); // بره صفحه خانه
    }
}
