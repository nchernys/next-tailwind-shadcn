import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";

export async function POST(request: Request) {
  const values = await request.json();

  try {
    // Insert data into Supabase
    const { data, error } = await supabase
      .from("contactMessages")
      .insert(values);

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
