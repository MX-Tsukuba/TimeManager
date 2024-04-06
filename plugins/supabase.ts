import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { defineNuxtPlugin } from "#app";
import type { Database } from "~/types/supabase";

export default defineNuxtPlugin((nuxtApp) => {
    const runtimeConfig = nuxtApp.$config;
    const supabase = createClient<Database>(
        runtimeConfig.public.SUPABASE_URL as string,
        runtimeConfig.public.SUPABASE_KEY as string,
    );

    nuxtApp.provide("supabase", supabase);
});

declare module "#app" {
    interface NuxtApp {
        $supabase: SupabaseClient;
    }
}

// export default defineNuxtPlugin((nuxtApp) =>{
//     const runtimeConfig = nuxtApp.$config;
//     const supabase = createClient<Database>(
//         runtimeConfig.public.SUPABASE_URL as string,
//         runtimeConfig.public.SUPABASE_KEY as string,
//     );
//     nuxtApp.$supabase = supabase;

//     return {
//         provide: {
//             supabase :supabase
//         }
//     }
// });

// const supabaseUrl = SUPABASE_URL;

// console.log("--------------")
// console.log(process.env)
// console.log("--------------")


// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// export default supabase;