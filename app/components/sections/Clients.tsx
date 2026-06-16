import Image from "next/image"
import { clients } from "@/lib/clients"
import Divider from "../ui/Divider"
import SectionHeading from "../ui/SectionHeading"
import SectionLabel from "../ui/SectionLabel"
import SectionShell from "../ui/SectionShell"

export default function Clients() {
  return (
    <SectionShell id="clients">
      <SectionLabel className="mb-4">Collaborations</SectionLabel>
      <SectionHeading count={clients.length} className="mb-8 sm:mb-12">
        Clients
      </SectionHeading>
      <Divider className="mb-12" />

      <div className="space-y-6">
        {clients.map((client) => (
          <div key={client.id} className="relative aspect-[21/9] w-full overflow-hidden rounded-sm">
            <Image
              src={client.image}
              alt={client.name}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <p className="text-lg font-medium tracking-[0.1em]">{client.name}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
