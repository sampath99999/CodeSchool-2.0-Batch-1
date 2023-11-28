<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{
    const ACCEPTED=1;
    const REJECTED=21;
    const PENDING=0;
    
    use HasFactory;
    public function users(){
        return $this->belongsTo(User::class,'user_id','id');
    }     
    public function uploads(){
        return $this->belongsTo(Upload::class,'upload_id','id');
    } 

}
