import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

type tableProps<T> = {
    caption?: string;
    columns: Array<string>;
    data: Array<T>;
}

function generateTableProps<T extends object>(data: Array<T>, caption?: string): tableProps<T> {
    const columns: Array<string> = Object.keys(data[0]);

    return {
        caption,
        columns,
        data
    }
}

export default function table<T extends object>(data: Array<T>, caption?: string) {
    const tableProps = generateTableProps<T>(data, caption);

    return (
        <Table>
            {caption && <TableCaption>{caption}</TableCaption>}
            <TableHeader>
                <TableRow>
                {tableProps.columns.map(column => <TableHead key={column}>{column}</TableHead>)}
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableProps.data.map(column => {
                    return <TableRow>{Object.keys(column).map(key => <TableCell className="font-medium">{(column as any)[key]}</TableCell>)}</TableRow>
                })};
            </TableBody>
        </Table>
    )
}