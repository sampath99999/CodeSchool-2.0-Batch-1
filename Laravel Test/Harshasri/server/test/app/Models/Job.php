<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $table = 'jobs';
    use HasFactory;

    public function users(){
        return $this->belongsTo(User::class);
    }
}
