<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',         // بیمار
        'doctor_id',       // دکتر
        'appointment_date',
        'appointment_time',
        'status',          // reserved, canceled, completed
        'description',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'userId');
    }

    // public function doctor()
    // {
    //     return $this->belongsTo(User::class, 'doctor_id');
    // }
}
