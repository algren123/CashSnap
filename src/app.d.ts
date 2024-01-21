// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { SupabaseClient, Session } from '@supabase/supabase-js';

declare global {
  interface IFormData {
    currency: '$' | '£' | '€';
    salary: number;
    otherIncome: number;
    housingType: 'renting' | 'mortgage' | 'other';
    housingCost: number;
    gas: number;
    electricity: number;
    water: number;
    internet: number;
    groceries: number;
    takeaways: number;
    carPayment: number;
    carInsurance: number;
    carFuel: number;
    publicTransport: number;
    phone: number;
    insurance: number;
    subscriptions: number;
    otherBills: number;
    creditCard: number;
    loans: number;
    entertainment: number;
    savings: number;
    investments: number;
    misc: number;
    notes: string;
  }

  // Supabase
  interface Locals {
    supabase: SupabaseClient;
    getSession(): Promise<Session | null>;
  }
  interface PageData {
    session: Session | null;
  }
}

export {};
