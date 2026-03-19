import { Resend } from 'resend';
import { NextResponse } from "next/server";
import { siteConfig } from "@/constants/site";

// Masukkan API Key Anda
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ message: "Email tidak valid" }, { status: 400 });
    }

    // Mengirim email notifikasi ke admin/Coach Frans
    const { data, error } = await resend.emails.send({
      from: 'ITC Newsletter <onboarding@resend.dev>', // Gunakan domain ini untuk testing gratis
      to: [siteConfig.contact.email], // Email tujuan dari constants Anda
      subject: 'Peserta Baru Newsletter ITC',
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0F0D2E;">Halo Coach Frans,</h2>
          <p>Ada pendaftar baru yang ingin mendapatkan update dari <strong>${siteConfig.name}</strong>:</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Email:</strong> ${email}</p>
          </div>
          <p style="font-size: 12px; color: #888;">Pesan ini dikirim otomatis dari sistem website ITC.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ message: "Gagal mengirim email" }, { status: 500 });
    }

    return NextResponse.json({ message: "Berhasil berlangganan!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}