import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
title: "Professional Painting Services",
description: "Transform your space with our expert painting services",
}

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return <ClientLayout>{children}</ClientLayout>
}