import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import { Badge, ColorSwatch, Container, Group, MantineProvider, Stack, Text } from '@mantine/core';
import { DonutChart } from '@mantine/charts';

const total = 10463;
const inActive = 5193;
const active = 5270;

const data = [
  { name: 'Inactive', value: inActive, color: 'gray.6' },
  { name: 'Active', value: active, color: 'blue' },
];

export default function App() {
  return (
    <MantineProvider>
      <Container style={{ margin: '30px', padding: '20px', border: '1px solid #c6c6c677', borderRadius: '5px', width: '800px' }}>
        <Text fw={600}>Community members by status</Text>
        <Group style={{ justifyContent: 'center', columnGap: '40px', alignItems: 'flex-start' }}>
          <DonutChart
            data={data.map((sector) => ({
              ...sector,
              label: `${((sector.value / total) * 100).toFixed(0)}%`,
            }))}
            size={180}
            thickness={45}
          />

          <Stack style={{ rowGap: '8px', width: '150px', margin: '10px' }}>
            <Group style={{ justifyContent: 'space-between' }}>
              <ColorSwatch color='grey' size={10}></ColorSwatch>
              <Text c="dimmed">Inactive</Text>
              <Badge style={{ background: '#c6c6c677', color: 'black' }}>{inActive}</Badge>
            </Group>
            <Group style={{ justifyContent: 'space-between' }}>
              <ColorSwatch color='blue' size={10}></ColorSwatch>
              <Text c="dimmed">Active</Text>
              <Badge style={{ background: '#c6c6c677', color: 'black' }}>{active}</Badge>
            </Group>
            <hr style={{ border: '1px solid #c6c6c677', width: '145px', margin: '0px' }}></hr>
            <Group style={{ justifyContent: 'space-between' }}>
              <Text>Total</Text>
              <Badge style={{ background: '#c6c6c677', color: 'black' }}>{inActive + active}</Badge>
            </Group>
          </Stack>
        </Group>
      </Container>
    </MantineProvider>
  );
}
