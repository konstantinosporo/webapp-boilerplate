// types for navbar and user class
type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
} | undefined;

type ComplexNavbarProps = {
  user?: User;
};