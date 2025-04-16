import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Definir la interfaz para recibir `onLogin`
interface LoginProps {
  onLogin: () => void;
}

const username = "mduquee";
const password = "5500";

export function Login({ onLogin }: LoginProps) {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputUsername === username && inputPassword === password) {
      localStorage.setItem("isAuthenticated", "true");
      onLogin(); // Llama a la función para actualizar el estado en App.tsx
      navigate("/tasks"); // Redirige a la página de tareas
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Access Task Manager</CardTitle>
            <CardDescription>
              Track your daily tasks.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}> {/* Corregir el onSubmit */}
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="Email"
                    value={inputUsername}
                    onChange={(e) => setInputUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                  />
                </div>
              </div>
              <CardFooter className="flex justify-center py-4">
                <Button type="submit">Log in</Button> {/* Ahora el botón usa onSubmit */}
              </CardFooter>
            </form>
          </CardContent>
        </Card>
    </div>
  );
}
