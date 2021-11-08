import {Card, Text} from "@ui-kitten/components";

export const Item = (item) => {
    return (
        <Card>
            <Text>{ item.name }</Text>
        </Card>
    );
}