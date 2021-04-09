import { useRouter } from "next/router";
import Head from "next/head";
import useSWR from "swr";

import { AiOutlineUser, AiFillSkin, AiOutlineCalendar } from "react-icons/ai";
import { RiGenderlessLine, RiCoinsFill } from "react-icons/ri";
import { BsFillPeopleFill, BsCreditCard } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { GiDoorRingHandle, GiMoneyStack } from "react-icons/gi";

import api from "../server";

const fetcher = (url) => api.get(url).then((res) => res.data);

function Dashboard() {
  const router = useRouter();
  const { data, error } = useSWR(`/clients/${router.query.id}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <Head>
        <title>LGPD Bank - Dashboard</title>
        <link rel="icon" href="/bank.svg" />
      </Head>
      <img src="/bank.svg" alt="Bank" className="absolute w-20 h-20 m-4" />
      <div className="flex flex-col items-center justify-center w-full bg-gray-100">
        <div className="relative w-1/2">
          <div className="absolute transform shadow-lg inset-10 bg-gradient-to-r from-purple-600 to-purple-200 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 m-8 bg-white shadow-lg sm:rounded-3xl">
            <div className="relative info-section-2">
              <div className="section">
                <div className="section-header">
                  <p className="absolute text-xl antialiased font-bold tracking-wider text-purple-600 uppercase transform -translate-x-1/2 animate-pulse left-1/2 -top-8">
                    Dashboard
                  </p>
                  <p className="section-title">Personal Infos</p>
                  {data.gender === "M" ? (
                    <img src="/man.svg" alt="Icon" className="icon" />
                  ) : (
                    <img src="/woman.svg" alt="Icon" className="icon" />
                  )}
                </div>
                <div className="divide-y-2 divide-solid">
                  <div className="div-detail">
                    <AiOutlineUser className="icon-detail" />
                    <div>
                      <p className="font-bold">Age</p>
                      <p>{data.age}</p>
                    </div>
                  </div>

                  <div className="div-detail">
                    <AiFillSkin className="text-blue-400 icon-detail" />
                    <div>
                      <p className="font-bold">Status</p>
                      <p>{data.status}</p>
                    </div>
                  </div>

                  <div className="div-detail">
                    <RiGenderlessLine className="text-purple-400 icon-detail" />
                    <div>
                      <p className="font-bold">Gender</p>
                      <p>{data.gender}</p>
                    </div>
                  </div>

                  <div className="div-detail">
                    <BsFillPeopleFill className="text-red-300 icon-detail" />
                    <div>
                      <p className="font-bold">Dependent Count</p>
                      <p>{data.dependent_count}</p>
                    </div>
                  </div>

                  <div className="div-detail">
                    <IoMdSchool className="text-blue-900 icon-detail" />
                    <div>
                      <p className="font-bold">Education Level</p>
                      <p>{data.education_Level}</p>
                    </div>
                  </div>

                  <div className="div-detail">
                    <GiDoorRingHandle className="text-blue-300 icon-detail" />
                    <div>
                      <p className="font-bold">Marital Status</p>
                      <p>{data.marital_Status}</p>
                    </div>
                  </div>

                  <div className="div-detail">
                    <GiMoneyStack className="text-green-600 icon-detail" />
                    <div>
                      <p className="font-bold">Income Category</p>
                      <p>{data.income_category}</p>
                    </div>
                  </div>

                  <div className="div-detail">
                    <BsCreditCard className="text-yellow-700 icon-detail" />
                    <div>
                      <p className="font-bold">Card Category</p>
                      <p>{data.card_category}</p>
                    </div>
                  </div>

                  <div className="div-detail">
                    <AiOutlineCalendar className="text-red-900 icon-detail" />
                    <div>
                      <p className="font-bold">Mounths Active</p>
                      <p>{data.mounths_active}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section">
                <div className="section-header">
                  <p className="section-title">Account Infos</p>
                  <img src="/credit-card.svg" alt="Icon" className="icon" />
                </div>
                <div className="divide-y-2 divide-solid">
                  <div className="div-detail">
                    <RiCoinsFill className="text-yellow-400 icon-detail" />
                    <div>
                      <p className="font-bold">Credit Limit</p>
                      <p>{data.credit_limit}</p>
                    </div>
                  </div>
                  <div className="div-detail">
                    <RiCoinsFill className="text-yellow-400 icon-detail" />
                    <div>
                      <p className="font-bold">Credit Usage</p>
                      <p>{data.credit_usage}</p>
                    </div>
                  </div>
                  <div className="div-detail">
                    <RiCoinsFill className="text-yellow-400 icon-detail" />
                    <div>
                      <p className="font-bold">Credit Remaining</p>
                      <p>{data.credit_remaining}</p>
                    </div>
                  </div>
                  <div className="div-detail">
                    <RiCoinsFill className="text-yellow-400 icon-detail" />
                    <div>
                      <p className="font-bold">Total Transactions Amount</p>
                      <p>{data.total_trans_amt}</p>
                    </div>
                  </div>
                  <div className="div-detail">
                    <RiCoinsFill className="text-yellow-400 icon-detail" />
                    <div>
                      <p className="font-bold">Total Transactions Count</p>
                      <p>{data.total_trans_ct}</p>
                    </div>
                  </div>
                  <div className="div-detail">
                    <RiCoinsFill className="text-yellow-400 icon-detail" />
                    <div>
                      <p className="font-bold">Avarage Utilization Ratio</p>
                      <p>{data.avg_utilization_ratio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="screen-dash">
        <p className="pb-2 text-xl antialiased font-bold tracking-wider uppercase">
          Dashboard
        </p>
        <div className="info-section">
          <div className="info-section-2">
            <div className="section">
              <div className="section-header">
                <p className="section-title">Personal Infos</p>
                {data.gender === "M" ? (
                  <img src="/man.svg" alt="Icon" className="icon" />
                ) : (
                  <img src="/woman.svg" alt="Icon" className="icon" />
                )}
              </div>
              <div className="divide-y-2 divide-solid">
                <div className="div-detail">
                  <AiOutlineUser className="icon-detail" />
                  <div>
                    <p className="font-bold">Age</p>
                    <p>{data.age}</p>
                  </div>
                </div>

                <div className="div-detail">
                  <AiFillSkin className="text-blue-400 icon-detail" />
                  <div>
                    <p className="font-bold">Status</p>
                    <p>{data.status}</p>
                  </div>
                </div>

                <div className="div-detail">
                  <RiGenderlessLine className="text-purple-400 icon-detail" />
                  <div>
                    <p className="font-bold">Gender</p>
                    <p>{data.gender}</p>
                  </div>
                </div>

                <div className="div-detail">
                  <BsFillPeopleFill className="text-red-300 icon-detail" />
                  <div>
                    <p className="font-bold">Dependent Count</p>
                    <p>{data.dependent_count}</p>
                  </div>
                </div>

                <div className="div-detail">
                  <IoMdSchool className="text-blue-900 icon-detail" />
                  <div>
                    <p className="font-bold">Education Level</p>
                    <p>{data.education_Level}</p>
                  </div>
                </div>

                <div className="div-detail">
                  <GiDoorRingHandle className="text-blue-300 icon-detail" />
                  <div>
                    <p className="font-bold">Marital Status</p>
                    <p>{data.marital_Status}</p>
                  </div>
                </div>

                <div className="div-detail">
                  <GiMoneyStack className="text-green-600 icon-detail" />
                  <div>
                    <p className="font-bold">Income Category</p>
                    <p>{data.income_category}</p>
                  </div>
                </div>

                <div className="div-detail">
                  <BsCreditCard className="text-yellow-700 icon-detail" />
                  <div>
                    <p className="font-bold">Card Category</p>
                    <p>{data.card_category}</p>
                  </div>
                </div>

                <div className="div-detail">
                  <AiOutlineCalendar className="text-red-900 icon-detail" />
                  <div>
                    <p className="font-bold">Mounths Active</p>
                    <p>{data.mounths_active}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="section-header">
                <p className="section-title">Account Infos</p>
                <img src="/credit-card.svg" alt="Icon" className="icon" />
              </div>
              <div className="divide-y-2 divide-solid">
                <div className="div-detail">
                  <RiCoinsFill className="text-yellow-400 icon-detail" />
                  <div>
                    <p className="font-bold">Credit Limit</p>
                    <p>{data.credit_limit}</p>
                  </div>
                </div>
                <div className="div-detail">
                  <RiCoinsFill className="text-yellow-400 icon-detail" />
                  <div>
                    <p className="font-bold">Credit Usage</p>
                    <p>{data.credit_usage}</p>
                  </div>
                </div>
                <div className="div-detail">
                  <RiCoinsFill className="text-yellow-400 icon-detail" />
                  <div>
                    <p className="font-bold">Credit Remaining</p>
                    <p>{data.credit_remaining}</p>
                  </div>
                </div>
                <div className="div-detail">
                  <RiCoinsFill className="text-yellow-400 icon-detail" />
                  <div>
                    <p className="font-bold">Total Transactions Amount</p>
                    <p>{data.total_trans_amt}</p>
                  </div>
                </div>
                <div className="div-detail">
                  <RiCoinsFill className="text-yellow-400 icon-detail" />
                  <div>
                    <p className="font-bold">Total Transactions Count</p>
                    <p>{data.total_trans_ct}</p>
                  </div>
                </div>
                <div className="div-detail">
                  <RiCoinsFill className="text-yellow-400 icon-detail" />
                  <div>
                    <p className="font-bold">Avarage Utilization Ratio</p>
                    <p>{data.avg_utilization_ratio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Dashboard;
