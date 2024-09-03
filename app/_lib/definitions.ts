// types for navbar and user class
type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
} | undefined;

type MyNavBarProps = {
  user?: User;
};

type ModelUser = {
  id: string;
  email: string;
  name: string;
}

type ModelCustomer = {
  id: string;
  email: string;
  name: string;
  image_url: string;
}