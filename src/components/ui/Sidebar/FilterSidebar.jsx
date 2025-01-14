import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
} from "../sidebar";

const FilterSidebar = ({ children }) => {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>rdtgf</SidebarContent>
        <div>{children}</div>
      </Sidebar>
    </SidebarProvider>
  );
};
export default FilterSidebar;
