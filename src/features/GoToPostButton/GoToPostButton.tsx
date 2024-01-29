import { FC, useCallback } from "react";
import { Button } from "../../shared";
import type { IGoToPostButtonProps } from "./types";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../app";

export const GoToPostButton: FC<IGoToPostButtonProps> = ({ id }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`${Routes.post}/${id}`);
  }, [id, navigate]);

  return <Button onClick={handleClick}>Посмотреть</Button>;
};
