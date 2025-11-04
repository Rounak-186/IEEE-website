import { AdminAuthContainer } from '@/components/AdminAuthContainer'
import React from 'react'

function AccessAdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <AdminAuthContainer>
            {children}
        </AdminAuthContainer>
    )
}

export default AccessAdminLayout;