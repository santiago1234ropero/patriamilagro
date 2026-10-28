import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://wwlnwomgeuxdjbvubosz.supabase.co";
const supabaseAnonKey = "sb_publishable_DFxevY-AV0g8OfyjAgLCyw_DktNhyDh";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const formulariotareas= document.getElementById("formulario-tareas");
const entradatareas = document.getElementById("entrada-tareas");
const listatareas = document.getElementById("lista-tareas");

function obtener tareas () {
    const{data, error} = await supabase
    .from("tareas")
    .select("*")
    .order("id", {ascending: false})
}
