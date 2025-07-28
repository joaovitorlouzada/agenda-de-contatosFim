'use client';
import { useRouter } from 'next/navigation';

export function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="border border-border px-3 py-1 rounded-md text-sm font-semibold hover:bg-text-primary hover:text-white transition-colors mb-4"
    >
      ← Voltar
    </button>
  );
}
