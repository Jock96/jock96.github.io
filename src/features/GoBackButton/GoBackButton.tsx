import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared";

export const GoBackButton: FC = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return <Button onClick={handleClick}>Назад</Button>;
};
