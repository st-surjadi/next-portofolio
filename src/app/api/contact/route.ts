export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORM_SECRET_KEY,
        name,
        email,
        message,
      }),
    });

    const data: { success: boolean; message?: string } = await response.json();

    if (data.success) {
      return Response.json({ success: true }, { status: 200 });
    } else {
      return Response.json(
        { success: false, message: data.message ?? "Unknown error" },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Error in contact API:", error);
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
