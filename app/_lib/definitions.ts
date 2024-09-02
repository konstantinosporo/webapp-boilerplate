// types for navbar and user class
type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
} | undefined;

type MyNavBarProps = {
  user?: User;
};

