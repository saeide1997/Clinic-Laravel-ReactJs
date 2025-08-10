<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'mobile',
        'address',
        'speciality_id',
        'point',
        'pointQuantity',
        'isActive',
        'systemNo'
    ];

    public function availabilities()
    {
        return $this->hasMany(DoctorAvailability::class);
    }

    public function specialities()
    {
        return $this->belongsToMany(Specialty::class);
    }
}
