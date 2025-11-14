import { AdminAuthContainer } from '@/components/ui/AdminAuthContainer'
import React from 'react'

function TeamAdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <AdminAuthContainer>
            {children}
        </AdminAuthContainer>
    )
}

export default TeamAdminLayout;