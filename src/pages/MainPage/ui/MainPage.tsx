import React from "react";
import { useTranslation } from "react-i18next";
import { BugButton } from "../../../app/providers/ErrorBoundary/ui/BugButton";

const MainPage = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <BugButton />
      <h1>{t('home')}</h1>
    </div>
  );
}

export default MainPage;