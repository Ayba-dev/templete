import type { TableProps } from 'antd/lib'

interface CreateTableColumnsOptionsProps<
  Columns,
  TableKeyTypes extends string | number | symbol,
> {
  columns: TableProps<Columns>['columns']
  exceptions: Record<TableKeyTypes, string[]>
}

export const createTableColumnsOptions = <
  Columns,
  TableKeyTypes extends string | number | symbol = string,
>({
  columns,
}: CreateTableColumnsOptionsProps<Columns, TableKeyTypes>) => {
  // @TODO Azamat
  return columns
}
