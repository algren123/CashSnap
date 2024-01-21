export interface IDBReport {
  public: {
    Tables: {
      reports: {
        Row: {
          id: number;
          user_id: string;
          task: string | null;
          is_complete: boolean | null;
          inserted_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          task?: string | null;
          is_complete?: boolean | null;
          inserted_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
