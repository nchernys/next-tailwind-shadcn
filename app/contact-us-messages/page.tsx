import { supabase } from "../../lib/supabaseClient";

export default async function MessagesPage() {
  const { data: messages, error } = await supabase
    .from("contactMessages")
    .select("*");

  if (error) {
    return <div>Error fetching messages: {error.message}</div>;
  }

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map((message) => (
          <>
            <li key={message.id}>
              {message.firstName} ({message.lastName})
            </li>
            <li>{message.message}</li>
          </>
        ))}
      </ul>
    </div>
  );
}
