import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const sendGoogleCodeUrl = ""; // ton url vers ton api(backend) qui va recuperer le code est recuperer les data pour la DB

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: code }),
    };
    localStorage.setItem("isConnected", true);
    console.log("here");
    fetch(sendGoogleCodeUrl, requestOptions).then((response) => {
      if (response.status === 200) {
        setTimeout(() => {
          router.push("/");
        }, 8000); // le programme va attendre 1000ms avant de continuer fonction async
      }
    });
  }, [code]);

  return (
    <>
    <div className="flex flex-col justify-center items-center w-[500px]  bg-[#f7f5f1] bg-[url('/Logo/backgground.png')] bg-cover bg-no-repeat">
        <img src="Logo/loading-icon.png" className="w-[100px] animate-spin" />
        <p>
          Votre compte est en cours de création 
          </p>
          <p>
          Nous y sommes presque ! 🚀 Nous
          sommes en train de finaliser la création de votre compte. Cela ne
          prendra que quelques instants. En attendant, voici ce que vous pouvez
          attendre : Confirmation par email : Vous recevrez un email de
          confirmation sous peu. Accès à votre compte : Une fois la création
          terminée, vous pourrez vous connecter et explorer toutes nos
          fonctionnalités. Merci de votre patience et bienvenue dans notre
          communauté ! Si vous avez des questions, n'hésitez pas à nous
          contacter à support@example.com.
      </p>
      {code}
    </div>    
    </>
  );
}
