type TestimonialProps = {
  name: string;
  role: string;
  comment: string;
};

export default function TestimonialCard({
  name,
  role,
  comment,
}: TestimonialProps) {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 transition">
      <p className="text-gray-400 leading-relaxed">
        “{comment}”
      </p>

      <div className="mt-6">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}
