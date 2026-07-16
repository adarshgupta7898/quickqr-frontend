import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const NotFound = () => (
  <div className="flex items-center justify-center py-10">
    <Card className="w-full max-w-lg text-center" title="Page not found" description="The route you requested does not exist.">
      <div className="mt-4 flex justify-center">
        <Link to="/">
          <Button>Back to home</Button>
        </Link>
      </div>
    </Card>
  </div>
);

export default NotFound;
