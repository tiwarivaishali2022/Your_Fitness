import React from 'react';
// import '../CSS/style.css';
// import '../CSS/utils.css';
import Image from '../../assets/Gym.png';
import Imagedemo from '../../assets/dumble.jpeg';

export default function Home() {
  return (
    <div class="container mx-auto">
    <main className="min-h-screen">
            <section className="section1">
                <div className="flex">
                    <div className="topleft flex flex-col justify-center px-2">
                        <div className="text-center">
                            <img className="dumbellimg" src={Imagedemo} alt="" />
                        </div>
                        <h1 className="my-1 text-center">The best fitness Gym in Andheri-East</h1>
                        <p className="text-center">There are a few main components of fitness, all of which are important
                            for building a well-rounded exercise routine. Below, you will find the ones included in the
                            Physical Activity Guidelines for Americans, which HHS highlights as the components that
                            should be included in weekly exercise.</p>
                    </div>
                    <div className="topright flex justify-center">
                        <img className="gymimg" src={ Image } alt="" />
                    </div>
                </div>
            </section>
            <hr />
            <section className="section2">
                <h1 className="text-center my-2">Pricing</h1>
                <p className="my-2">A pricing strategy is the approach you take to charging clients and members for your
                    services. It’s a fundamental element of a gym’s business model and therefore vital to get it right.
                    Learn fitness marketing at your own pace with our interactive video course. Get leads
                    for your gym or personal training business, create a marketing strategy & promote yourself using the
                    most effective methods.</p>
                <div className="boxes flex justify-center">
                    <div className="box">
                        <h2>Free</h2>
                        <ul>
                            <li className="highlighted">₹0/month</li>
                            <li>0 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                            <li><button className="btn">Signup Now</button></li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Pro</h2>
                        <ul>
                            <li className="highlighted">₹150/month</li>
                            <li>0 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                            <li><button className="btn">Signup Now</button></li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Enterprise</h2>
                        <ul>
                            <li className="highlighted">₹500/month</li>
                            <li>0 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                            <li><button className="btn">Signup Now</button></li>
                        </ul>
                    </div>
                </div>
            </section>
            <hr />
            <section className="section3">
                <h1 className="text-center my-2">Compare Plans</h1>
                <div className="container plantable">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Free</th>
                                <th>Pro</th>
                                <th>Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-start">Public</th>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Private</th>
                                <td>-</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Permissions</th>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Sharing</th>
                                <td>-</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Unlimited members</th>
                                <td>-</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-start">Extra security</th>
                                <td>-</td>
                                <td>-</td>
                                <td>Yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <hr />
        </main>
        
    
    
        </div>
  )
}
