// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutTableBucketMaintenanceConfigurationRequest } from "../models/models_0";
import {
  de_PutTableBucketMaintenanceConfigurationCommand,
  se_PutTableBucketMaintenanceConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { S3TablesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3TablesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutTableBucketMaintenanceConfigurationCommand}.
 */
export interface PutTableBucketMaintenanceConfigurationCommandInput
  extends PutTableBucketMaintenanceConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutTableBucketMaintenanceConfigurationCommand}.
 */
export interface PutTableBucketMaintenanceConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates a new maintenance configuration or replaces an existing maintenance configuration
 *       for a table bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-table-buckets-maintenance.html">Amazon S3 table bucket maintenance</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3tables:PutTableBucketMaintenanceConfiguration</code> permission to use this operation. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3TablesClient, PutTableBucketMaintenanceConfigurationCommand } from "@aws-sdk/client-s3tables"; // ES Modules import
 * // const { S3TablesClient, PutTableBucketMaintenanceConfigurationCommand } = require("@aws-sdk/client-s3tables"); // CommonJS import
 * const client = new S3TablesClient(config);
 * const input = { // PutTableBucketMaintenanceConfigurationRequest
 *   tableBucketARN: "STRING_VALUE", // required
 *   type: "icebergUnreferencedFileRemoval", // required
 *   value: { // TableBucketMaintenanceConfigurationValue
 *     status: "enabled" || "disabled",
 *     settings: { // TableBucketMaintenanceSettings Union: only one key present
 *       icebergUnreferencedFileRemoval: { // IcebergUnreferencedFileRemovalSettings
 *         unreferencedDays: Number("int"),
 *         nonCurrentDays: Number("int"),
 *       },
 *     },
 *   },
 * };
 * const command = new PutTableBucketMaintenanceConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutTableBucketMaintenanceConfigurationCommandInput - {@link PutTableBucketMaintenanceConfigurationCommandInput}
 * @returns {@link PutTableBucketMaintenanceConfigurationCommandOutput}
 * @see {@link PutTableBucketMaintenanceConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutTableBucketMaintenanceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3TablesClientResolvedConfig | config} for S3TablesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is invalid or malformed.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because there is a conflict with a previous write. You can retry the
 *       request.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller isn't authorized to make the request.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request failed due to an internal server error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link S3TablesServiceException}
 * <p>Base exception class for all service exceptions from S3Tables service.</p>
 *
 * @public
 */
export class PutTableBucketMaintenanceConfigurationCommand extends $Command
  .classBuilder<
    PutTableBucketMaintenanceConfigurationCommandInput,
    PutTableBucketMaintenanceConfigurationCommandOutput,
    S3TablesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3TablesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("S3TableBuckets", "PutTableBucketMaintenanceConfiguration", {})
  .n("S3TablesClient", "PutTableBucketMaintenanceConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutTableBucketMaintenanceConfigurationCommand)
  .de(de_PutTableBucketMaintenanceConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTableBucketMaintenanceConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutTableBucketMaintenanceConfigurationCommandInput;
      output: PutTableBucketMaintenanceConfigurationCommandOutput;
    };
  };
}
