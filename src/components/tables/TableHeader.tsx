import Row from "../heatmap/Row";

type TableHeaderProps = {
    color?: string;
    bgColor?: string;
    heading: string;
};

export default function TableHeader({ color = '#ffffff', bgColor = '#000000', heading }: TableHeaderProps) {
    return (
        <>
            <Row
                style={
                    {
                        color: color,
                        fontSize: "2.5rem",
                        backgroundColor: bgColor
                    }
                }
            >
                {heading}
            </Row>
        </>
    );
}