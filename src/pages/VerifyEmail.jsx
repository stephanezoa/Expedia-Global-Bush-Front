import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../services/api";

export default function VerifyEmail() {
  const [params] = useSearchParams();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const token = params.get("token");

    if (!token) return setStatus("error");

    api.post("/auth/verify-email", { token })
      .then(() => setStatus("success"))
      .catch(() => setStatus("error"));
  }, []);

  if (status === "loading") return <p>Vérification...</p>;
  if (status === "success") return <p>Email vérifié ✅</p>;
  return <p>Échec de la vérification ❌</p>;
}
