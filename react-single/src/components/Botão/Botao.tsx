import "./Botao.css";

type Props = {
    title: String
};

export function Botao(props: Props) {
    return (
        <div className="btn"> {props.title} </div>
    );
}