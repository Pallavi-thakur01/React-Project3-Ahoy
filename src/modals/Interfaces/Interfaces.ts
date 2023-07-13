 export default interface IButtonBlockProps {
  actions: {
    tool: string;
    onClick: () => void;
  }[];
  loader: any;
}