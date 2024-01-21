import { supabase } from '$lib/db.js';
import { error as svelteError } from '@sveltejs/kit';

export async function load({ params }) {
  const { data, error } = await supabase
    .from('reports')
    .select('*')
    .eq('id', params.id)
    .single();

  if (data) {
    return { report: data };
  }

  if (error) {
    svelteError(404, 'Not found');
  }
}
