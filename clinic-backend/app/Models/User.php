<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

   protected $fillable = [
        'name', 'mobile', 'national_code', 'verification_code', 'code_expires_at'
    ];

    protected $hidden = [
        'verification_code', 'code_expires_at',
    ];

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function speciality()
    {
        return $this->belongsTo(Specialty::class);
    }
}
