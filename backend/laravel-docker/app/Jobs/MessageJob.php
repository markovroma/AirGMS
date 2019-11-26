<?php

namespace App\Jobs;

use App\Message;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class MessageJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * @var Message
     */
    protected $message;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Message $message)
    {
        $this->message = $message;
    }

    public function handle()
    {
        // sending sms

        $this->message->sending_at = new \DateTime();
        $this->message->save();
    }

}
