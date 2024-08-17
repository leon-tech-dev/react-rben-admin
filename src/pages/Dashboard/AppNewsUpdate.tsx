import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { fToNow } from '@/lib/formatTime';
import Iconify from '@/components/iconify';
import Scrollbar from '@/components/Scrollbar';

interface NewsItem {
  id: string | number;
  image: string;
  title: string;
  description: string;
  postedAt: Date;
}

interface AppNewsUpdateProps {
  title?: string;
  subheader?: string;
  list: NewsItem[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function AppNewsUpdate({ title, subheader, list, ...other }: AppNewsUpdateProps) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {list.map((news) => (
            <NewsItem key={news.id} news={news} />
          ))}
        </Stack>
      </Scrollbar>
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}

interface NewsItemProps {
  news: NewsItem;
}

function NewsItem({ news }: NewsItemProps) {
  const { image, title, description, postedAt } = news;
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
      />
      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" underline="hover" noWrap>
          {title}
        </Link>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {fToNow(postedAt)}
      </Typography>
    </Stack>
  );
}
