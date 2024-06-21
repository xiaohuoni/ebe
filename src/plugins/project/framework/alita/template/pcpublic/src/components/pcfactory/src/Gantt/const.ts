const data = {
  delivery_date: '2021.11.19',
  pro_plan_id: '122',
  opp_id: '10004',
  project_plan_list: [
    {
      pro_plan_id: '1',
      prod_name: '专线',
      impl_start_date: '2021.10.1',
      plan_node_list: [
        {
          node_id: '1',
          node_name: '开始',
          plan_finish_date: '2021.10.15',
          progress_rate: '100',
        },
        {
          node_id: '2',
          node_name: '施工查勘',
          plan_finish_date: '2021.10.30',
          progress_rate: '50',
        },
        {
          node_id: '3',
          node_name: '硬件到货',
          plan_finish_date: '2021.11.10',
          progress_rate: '0',
        },
        {
          node_id: '4',
          node_name: '安装',
          plan_finish_date: '2021.11.15',
          progress_rate: '0',
        },
      ],
    },
    {
      pro_plan_id: '2',
      prod_name: 'IT建设',
      impl_start_date: '2021.10.2',
      plan_node_list: [
        {
          node_id: '1',
          node_name: '开始',
          plan_finish_date: '2021.10.5',
          progress_rate: '100',
        },
        {
          node_id: '2',
          node_name: '到货',
          plan_finish_date: '2021.10.12',
          progress_rate: '30',
        },
        {
          node_id: '3',
          node_name: '安装',
          plan_finish_date: '2021.10.25',
          progress_rate: '0',
        },
        {
          node_id: '4',
          node_name: '软件开发',
          plan_finish_date: '2021.11.17',
          progress_rate: '0',
        },
      ],
    },
    {
      pro_plan_id: '3',
      prod_name: '云视讯',
      impl_start_date: '2021.10.3',
      plan_node_list: [
        {
          node_id: '1',
          node_name: '开始',
          plan_finish_date: '2021.10.5',
          progress_rate: '100',
        },
        {
          node_id: '2',
          node_name: '到货',
          plan_finish_date: '2021.10.12',
          progress_rate: '30',
        },
        {
          node_id: '3',
          node_name: '安装',
          plan_finish_date: '2021.10.25',
          progress_rate: '0',
        },
      ],
    },
  ],
};

const PROCESS_STATUS_COLOR: any = {
  processing: '#4477EE',
  unstarted: '#F2F2F3',
  finished: '#00DA86',
  overtime: '#FFB558',
};

const LEGEND_MAP = [
  {
    status: 'processing',
    text: '进行中',
  },
  {
    status: 'unstarted',
    text: '未开始',
  },
  {
    status: 'finished',
    text: '已完成',
  },
  {
    status: 'overtime',
    text: '已超时',
  },
];

export { data, PROCESS_STATUS_COLOR, LEGEND_MAP };
