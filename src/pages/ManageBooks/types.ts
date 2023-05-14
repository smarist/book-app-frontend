export interface ManageBooksProps {
  edit?: Boolean;
  onClose?: () => void;
}

export interface ReducerState {
  title: string;
  image: string;
  image_src: string;
  description: string;
  price: number | null;
  isLoading: boolean;
}
