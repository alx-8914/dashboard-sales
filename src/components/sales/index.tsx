import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { AvatarFallback, Avatar, AvatarImage  } from "../ui/avatar";

export default function Sales() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Últimos Clientes
          </CardTitle>
          <CircleDollarSign className="ml-auto w h-4" />
        </div>
        <CardDescription>
          Novos Cilentes nas últimas 24hs
        </CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/alx-8914.png" />
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Alexsandro Dev FullStack</p>
            <span className="text=[12px] sm:text-sm text-gray-400">alexdevsilva@gmail.com</span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://www.instagram.com/lil_oliverkun/" />
            <AvatarFallback>BL</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">lil_oliverkun🌸🍓オィヴェル🍓🌸
            he/him</p>
            <span className="text=[12px] sm:text-sm text-gray-400">lil_oliverkun@email.com</span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/alx-8914.png" />
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Alexsandro Dev FullStack</p>
            <span className="text=[12px] sm:text-sm text-gray-400">alexdevsilva@gmail.com</span>
          </div>
        </article>
      </CardContent>
    </Card>
  )
}