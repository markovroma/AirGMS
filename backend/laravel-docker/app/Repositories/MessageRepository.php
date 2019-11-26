<?php

namespace App\Repositories;

use App\Jobs\MessageJob;
use App\Message;

class MessageRepository
{
    /**
     * Get's a message by it's ID
     *
     * @param $id
     * @return mixed
     */
    public function get($id)
    {
        return Message::find($id);
    }

    /**
     * Get's all messages.
     *
     * @return mixed
     */
    public function all()
    {
        return Message::orderBy('created_at', 'desc')->get();
    }

    /**
     * Deletes a message.
     *
     * @param int
     */
    public function delete(int $id)
    {
        Message::destroy($id);
    }

    /**
     * Create a new message
     *
     * @param array $data
     * @return int
     */
    public function create(array $data): Message
    {
        $message = new Message();
        $message->text = $data['text'];
        $message->recipient = $data['recipient'];
        $message->save();
        dispatch(new MessageJob($message));

        return $message;
    }

    /**
     * Updates a message.
     *
     * @param int
     * @param array
     */
    public function update($id, array $data)
    {
        Message::find($id)->update($data);
    }
}