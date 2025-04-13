import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSideBar from '@/features/layout/app-sidebar';
import Router from '@/routes/router'

function App() {
  return (
    <>
      <Router />
      <SidebarProvider>
        <AppSideBar />
        <SidebarTrigger />
      </SidebarProvider>
    </>
  )
}

export default App
