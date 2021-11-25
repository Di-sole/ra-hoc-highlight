import { withWrapper } from "./HOC";
import Video from "./Video";
import Article from "./Article";
import shortid from "shortid";

const VideoWithWrapper = withWrapper(Video);
const ArticleWithWrapper = withWrapper(Article);

function List(props) {
	return props.list.map(item => {
		switch (item.type) {
			case 'video':
				return (
					<VideoWithWrapper {...item} key={shortid.generate()} />
				);

			case 'article':
				return (
					<ArticleWithWrapper {...item} key={shortid.generate()} />
				);

			default:
				return null;
		}
	});
};

export default List;