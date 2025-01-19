const {createClient}=supabase;
const supabaseUrl = 'https://hzmulkmfrnypxkxsqunl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6bXVsa21mcm55cHhreHNxdW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxNDA4NzgsImV4cCI6MjA1MjcxNjg3OH0.tz9yYNH4E2i_rhIP3Jll9NZlWo3lJxrlNDBHPRZcDdE'
const supabaseClient = createClient(supabaseUrl, supabaseKey);

window.supabase=supabaseClient;


// Just for checking 
console.log(supabaseClient)  