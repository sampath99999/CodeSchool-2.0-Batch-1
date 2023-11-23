<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applyjob extends Model
{
    protected $table = 'applications';
    use HasFactory;
    public function users(){
        return $this->belongsTo(User::class);
    }

}
