import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { PageContent, PageLayout } from "./style";

export default function MainLayout() {
  return (
    <>
      <Header title="EMPLOYEE POLLS" labelSize={"1.5rem"} />
      <PageLayout>
        <PageContent>
          <Menu />
          <Outlet />
        </PageContent>
      </PageLayout>
    </>
  );
}
