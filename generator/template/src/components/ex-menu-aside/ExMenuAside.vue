<script>
import _ from 'lodash';

export default ({ data }) => {
  const { attrs, ...rest } = data;
  const {
    menus = [],
    path = 'path',
    title = 'title',
    route = 'route',
    iconType = 'el-icon',
    children = 'children',
    ...restAttrs
  } = attrs;

  const getIcon = item => {
    const iconOptions = {
      'el-icon': item => <i class={item.icon} />,
      iconfont: item => <i class={`iconfont item.icon`} />,
    };

    return iconType ? iconOptions[iconType](item) : null;
  };

  const subMenus = (items = [], parentPath = '') => {
    let res = [];
    for (const item of items) {
      if (_.isEmpty(_.get(item, children))) {
        res.push(
          <el-menu-item
            index={parentPath + item[path]}
            route={item[route]}
            key={parentPath + item[path]}
            disabled={item.disabled}
          >
            {getIcon(item)}
            <span slot='title'>{item[title]}</span>
          </el-menu-item>
        );
      } else {
        res.push(
          <el-submenu
            index={parentPath + item[path]}
            key={parentPath + item[path]}
          >
            <template slot='title'>
              {getIcon(item)}
              <span slot='title'>{item[title]}</span>
            </template>
            {subMenus(item.children, _.replace(item[path], /\/?$/, '/'))}
          </el-submenu>
        );
      }
    }

    return res;
  };

  return (
    <el-menu
      {...{
        ...{ attrs: restAttrs },
        ...rest,
      }}
    >
      {subMenus(menus)}
    </el-menu>
  );
};
</script>
