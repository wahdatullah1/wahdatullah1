import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
  website: z.string().max(0)
});

async function send(prevState: any, formData: FormData) {
  'use server';
  const data = Object.fromEntries(formData.entries());
  const parsed = schema.safeParse(data);
  if (!parsed.success) return { ok: false };
  console.log('message', parsed.data);
  revalidatePath('/contact');
  return { ok: true };
}

export default function ContactPage() {
  return (
    <section className="py-8">
      <h1 className="font-mono text-3xl mb-4">Contact</h1>
      <form action={send} className="max-w-md space-y-4">
        <input name="name" required placeholder="Name" className="w-full p-2 rounded bg-black/20" />
        <input name="email" type="email" required placeholder="Email" className="w-full p-2 rounded bg-black/20" />
        <textarea name="message" required placeholder="Message" className="w-full p-2 rounded bg-black/20" />
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <button type="submit" className="btn bg-primary text-background">Send</button>
      </form>
    </section>
  );
}
